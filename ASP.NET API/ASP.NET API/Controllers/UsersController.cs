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

        // You may want to implement a GetUser method here to retrieve user details by ID
    }
}
