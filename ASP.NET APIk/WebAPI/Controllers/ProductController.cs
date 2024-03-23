using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly JurlyStoreContext _DBContext;

        public ProductController(JurlyStoreContext DbContext)
        {
            this._DBContext = DbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            var product = this._DBContext.Products.ToList();
            return Ok(product);
        }
    }
}