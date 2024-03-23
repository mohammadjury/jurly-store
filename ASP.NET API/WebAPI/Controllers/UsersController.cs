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

        [HttpPost("AddUser")]
        public IActionResult Post(Users user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();

                return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex);

                return StatusCode(500, "Internal server error. Please try again later.");
            }
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

    }
}
