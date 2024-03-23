using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.DTOs.Products
{
    public class ProductsDTO
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        //public string? Description { get; set; }

        public decimal? Price { get; set; }

        public string? Image { get; set; }

        public string? Brand { get; set; }

        public string? Category { get; set; }

        public string? Type { get; set; }

        public int? Quantity { get; set; }
    }
}