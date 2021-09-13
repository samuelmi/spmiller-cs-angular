using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using spmillercs.Entities;

namespace spmillercs.Controllers
{
    public class ApproveEntryPayload
    {
        public string token { get; set; }
        public int entryId { get; set; }
    }

    public class GetPendingEntriesPayload
    {
        public string token { get; set; }
    }

    [Route("admin")]
    public class AdminController : ControllerBase
    {
        private readonly ILogger<AdminController> _logger;
        private readonly MyContext _context;

        private string _token;

        public AdminController(ILogger<AdminController> logger, MyContext context, IConfiguration config)
        {
            _logger = logger;
            _context = context;
            _token = config["AdminToken"];
            _logger.LogInformation(_token);
        }


        /*
            HTTP endpoint to get guestbook entries pending approval
        */
        [HttpPost("getPendingEntries")]
        public ActionResult GetPendingEntries([FromBody] GetPendingEntriesPayload payload)
        {
            _logger.LogInformation("Getting pending entries...");
            try
            {
                _logger.LogInformation(_token);
                if (payload.token == _token)
                {
                    return Ok(_context.entries.Where(x => x.Status == "Pending"));
                }
                return Unauthorized("Invalid Admin Token!");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest();
            }
        }

        /*
            HTTP endpoint for approving a guestbook entry
        */
        [HttpPost("approveEntry")]
        public ActionResult ApproveEntry([FromBody] ApproveEntryPayload payload)
        {
            try
            {
                // Checks if token is correct
                if (payload.token == _token)
                {
                    // Gets the entry passed  
                    Entry entry = _context.entries.Find(payload.entryId);
                    entry.Status = "Approved";
                    _context.SaveChanges();
                    return Ok();
                }
                // If incorrect token is given, return Unathorized
                return Unauthorized("Invalid Admin Token!");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                return BadRequest();
            }
        }
    }


}