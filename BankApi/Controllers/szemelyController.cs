using BankApi.Models;
using BankApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace BankApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class szemelyController : ControllerBase
{
    private readonly szemelyService _szemelyService;

    public szemelyController(szemelyService szemelyService) =>
        _szemelyService = szemelyService;

    [HttpGet]
    public async Task<List<szemely>> Get() =>
        await _szemelyService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<szemely>> Get(string id)
    {
        var book = await _szemelyService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        return book;
    }

    [HttpPost]
    public async Task<IActionResult> Post(szemely newszemely)
    {
        await _szemelyService.CreateAsync(newszemely);

        return CreatedAtAction(nameof(Get), new { id = newszemely.Id }, newszemely);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, szemely updatedszemely)
    {
        var book = await _szemelyService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        updatedszemely.Id = book.Id;

        await _szemelyService.UpdateAsync(id, updatedszemely);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var book = await _szemelyService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        await _szemelyService.RemoveAsync(id);

        return NoContent();
    }
}