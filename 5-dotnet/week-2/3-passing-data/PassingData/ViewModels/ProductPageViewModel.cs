using PassingData.Models;

namespace PassingData.ViewModels;

public class ProductPageViewModel
{
    public List<Product> Products { get; set; } = [];
    public int AvailableProductsCount { get; set; }
}
