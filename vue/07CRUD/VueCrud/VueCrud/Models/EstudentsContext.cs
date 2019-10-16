using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueCrud.Models
{
    public class StudentsContext: DbContext
    {
        public StudentsContext(DbContextOptions<StudentsContext> options)
            : base(options)
        { }

        public DbSet<Student> Students { get; set; }
    }

    public class Student
    {
        public int StudentId { get; set; }

        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(50)]
        public string Email { get; set; }

        [MaxLength(100)]
        public string Web { get; set; }

    }
}
