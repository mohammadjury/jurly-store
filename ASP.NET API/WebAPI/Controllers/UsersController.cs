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

    }


}
