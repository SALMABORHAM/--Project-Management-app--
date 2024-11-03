using Microsoft.AspNetCore.Mvc;
using ProjectManagementAPI.Data;
using ProjectManagementAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjectManagementAPI.Controllers
{
    [Route("api/projects/{projectId}/tasks")]

    //[Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TasksController(AppDbContext context)
        {
            _context = context;
        }

        // POST: /api/projects/{projectId}/tasks
        [HttpPost]
        public async Task<ActionResult<ProjectManagementAPI.Models.Task>> CreateTask(int projectId, ProjectManagementAPI.Models.Task task)
        {
            task.ProjectId = projectId;
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return Ok();
                }

        // GET: /api/projects/{projectId}/tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectManagementAPI.Models.Task>>> GetTasksForProject(int projectId) // Specify the full namespace for your Task model
        {
            return await _context.Tasks.Where(t => t.ProjectId == projectId).ToListAsync();
        }

        // PUT: /tasks/{taskId}
        [HttpPut("/tasks/{taskId}")]
        public async Task<IActionResult> UpdateTask(int taskId, ProjectManagementAPI.Models.Task task) // Specify the full namespace for your Task model

        {
            if (taskId != task.TaskId) return BadRequest();
            _context.Entry(task).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: /tasks/{taskId}
        [HttpDelete("/tasks/{taskId}")]
        public async Task<IActionResult> DeleteTask(int taskId)
        {
            var task = await _context.Tasks.FindAsync(taskId);
            if (task == null) return NotFound();
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}