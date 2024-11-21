using Microsoft.Extensions.Options;
using MongoDB.Driver;
using BankApi.Models;

namespace BankApi.Services;


public class szemelyService
{
    private readonly IMongoCollection<szemely> _szemelyCollection;

    public szemelyService(
        IOptions<bankDatabaseSettings> bankDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            bankDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            bankDatabaseSettings.Value.DatabaseName);

        _szemelyCollection = mongoDatabase.GetCollection<szemely>(
            bankDatabaseSettings.Value.szemelyCollectionName);
    }

    public async Task<List<szemely>> GetAsync() =>
        await _szemelyCollection.Find(_ => true).ToListAsync();

    public async Task<szemely?> GetAsync(string id) =>
        await _szemelyCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(szemely newBook) =>
        await _szemelyCollection.InsertOneAsync(newBook);

    public async Task UpdateAsync(string id, szemely updatedBook) =>
        await _szemelyCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

    public async Task RemoveAsync(string id) =>
        await _szemelyCollection.DeleteOneAsync(x => x.Id == id);
}