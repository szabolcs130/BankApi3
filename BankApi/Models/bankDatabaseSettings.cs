using MongoDB.Bson.Serialization.Attributes;

namespace BankApi.Models
{
    public class bankDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string szemelyCollectionName { get; set; } = null!;
    }
}
