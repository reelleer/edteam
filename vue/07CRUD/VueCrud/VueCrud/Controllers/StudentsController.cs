using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VueCrud.Models;

namespace VueCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentsContext _db;

        public StudentsController(StudentsContext context)
        {
            _db = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> Get()
        {
            //return new string[] { "value1", "value2" };
            var all = await _db.Students.ToListAsync();

            return all;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> Get(int id)
        {
            var student = await _db.Students.FindAsync(id);

            if (student == null)
                return NotFound();

            return student;
        }

        // POST api/values
        [HttpPost]
        public async Task<ActionResult<Student>> Post([FromBody, Bind("Name", "Email","Web")] Student entitty)
        {
            _db.Students.Add(entitty);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = entitty.StudentId }, entitty);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Student entity)
        {
            if (id != entity.StudentId)
                return BadRequest();

            _db.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var student = await _db.Students.FindAsync(id);

            if (student == null)
                return NotFound();

            _db.Students.Remove(student);
            await _db.SaveChangesAsync();

            return NoContent();

        }
    }
}
