using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BankApi.Models
{
    public class szemely
    {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    
    public string nev { get; set; }

    public decimal szamla { get; set; }

    public bool tilt { get; set; }


    
    }
}
