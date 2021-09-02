using System.ComponentModel.DataAnnotations;

namespace spmillercs.Entities
{
    public class Entry
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Message { get; set; }
        [Required]
        public string Timestamp { get; set; }
    }
}