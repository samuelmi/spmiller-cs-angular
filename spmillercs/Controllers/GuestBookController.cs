using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using spmillercs.Entities;

namespace spmillercs.Controllers
{
    [Route("guestBook")]
    public class GuestBookController : ControllerBase
    {
        // Searched against to determine if a GuestBook entry contains obscene language
        private string[] obsceneWords;

        private readonly ILogger<GuestBookController> _logger;
        private readonly MyContext _context;

        public GuestBookController(ILogger<GuestBookController> logger, MyContext context)
        {
            _logger = logger;
            _context = context;

            // Reads in JSON file containing obscene words
            string obsceneWordsJson = System.IO.File.ReadAllText("../obscene_words.json");
            // Converts JSON to an array of strings
            obsceneWords = JsonConvert.DeserializeObject<string[]>(obsceneWordsJson);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Entry entry)
        {
            try
            {
                // Checks if 
                if (obsceneWords.Any(entry.Message.Contains))
                {
                    return BadRequest("Your guestbook entry contains offensive term(s).");
                }
                _context.entries.Add(entry);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex.ToString());
                return BadRequest();
            }
        }
    }
}