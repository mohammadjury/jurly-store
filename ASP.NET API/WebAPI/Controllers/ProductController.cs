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
        [HttpGet("GetById")]
        public IActionResult Get(int id)
        {
            var product = this._DBContext.Products.FirstOrDefault(x => x.Id == id);
            return Ok(product);
        }
        [HttpPost("Create")]
        public IActionResult Create(Product product)
        {
            this._DBContext.Products.Add(product);
            this._DBContext.SaveChanges();
            return Ok(product);
        }
        [HttpPut("Update")]
        public IActionResult Update(Product product)
        {
            this._DBContext.Products.Update(product);
            this._DBContext.SaveChanges();
            return Ok(product);
        }
        [HttpDelete("Delete")]
        public IActionResult Delete(int id)
        {
            var product = this._DBContext.Products.FirstOrDefault(x => x.Id == id);
            this._DBContext.Products.Remove(product);
            this._DBContext.SaveChanges();
            return Ok(product);
        }

        
    }
}