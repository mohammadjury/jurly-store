using System;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("users")]
    public class UsersController : ControllerBase
    {
           private readonly JurlyStoreContext _dbContext;
  
        public UsersController(JurlyStoreContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            var users = this._dbContext.Users.ToList();
            return Ok(users);
        }
        
        [HttpPut("UpdateUser")]
        public IActionResult UpdateUsers(Users user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _dbContext.Users.Update(user);
            _dbContext.SaveChanges();

            return Ok(user);
        }

        [HttpDelete("DeleteUser")]
        public IActionResult DeleteUser(int id)
        {
            var user = _dbContext.Users.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            _dbContext.Users.Remove(user);
            _dbContext.SaveChanges();

            return NoContent();
        }
        [HttpGet("GetUserByUsername")]
        public IActionResult GetUserByUsername(string username)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Username == username);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            // Fetch the user from the database by id
              var user = _dbContext.Users.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }


        [HttpPost("AddUser")]
        public IActionResult AddUser(Users user)
        {
         if (!ModelState.IsValid)
         {
        return BadRequest(ModelState);
         }
         try
         {
        
            var existingUser = _dbContext.Users.FirstOrDefault(u => (u.Email == user.Email) || (u.Username == user.Username) );
             if (existingUser != null)
             {
              return Conflict("User already exists.");
             }

              _dbContext.Users.Add(user);
              _dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
         }
         catch (Exception ex)
         {
             Console.WriteLine(ex);
             return StatusCode(500, "Internal server error. Please try again later.");
         }
        }

        [HttpPost("Login")]
        public IActionResult Login(Users user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingUser = _dbContext.Users.FirstOrDefault(u => u.Username == user.Username && u.Password == user.Password);

            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            return Ok(existingUser);
        }


        [HttpPost("Register")]
        public IActionResult Register(Users user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingUser = _dbContext.Users.FirstOrDefault(u => u.Username == user.Username || u.Email == user.Email);

            if (existingUser != null)
            {
                return Conflict("User already exists.");
            }

            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            return Ok();
        }

        [HttpPost("UpdatePassword")]
        public IActionResult UpdatePassword(Users user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingUser = _dbContext.Users.FirstOrDefault(u => u.Username == user.Username);

            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            existingUser.Password = user.Password;
            _dbContext.SaveChanges();

            return Ok(existingUser);
        }

        [HttpPost("UpdateUsername")]
        public IActionResult UpdateUsername(Users user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingUser = _dbContext.Users.FirstOrDefault(u => u.Username == user.Username);

            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            existingUser.Username = user.Username;
            _dbContext.SaveChanges();

            return Ok(existingUser);
        }

        

    }


}
