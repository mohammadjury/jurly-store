using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public partial class JurlyStoreContext : DbContext
    {
        public JurlyStoreContext()
        {
        }

        public JurlyStoreContext(DbContextOptions<JurlyStoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("PK_products");

                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Brand)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnName("brand");
                entity.Property(e => e.Category)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnName("category");
                entity.Property(e => e.Description)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnType("text")
                    .HasColumnName("description");
                entity.Property(e => e.Image)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnName("image");
                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnName("name");
                entity.Property(e => e.Price)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("price");
                entity.Property(e => e.Quantity)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnName("quantity");
                entity.Property(e => e.Type)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(NULL)")
                    .HasColumnName("type");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}