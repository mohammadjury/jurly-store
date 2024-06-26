﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace WebAPI.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? Name { get; set; }
    
    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public decimal? Discount { get; set; }

    public string? Image { get; set; }

    public string? Brand { get; set; }

    public string? Category { get; set; }

    public string? Type { get; set; }

    public int? Quantity { get; set; }
}
