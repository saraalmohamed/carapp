using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using Newtonsoft.Json;

namespace MvcMovie.Controllers;

[Route("getbasicinfo")]
public class VINController : Controller
{
    public ContentResult Index(string vin)
    {
        using(var client = new HttpClient()){
            client.BaseAddress = new Uri("mongodb://killbox:ParticularlyHappyIllustrations63%26Home@10.8.1.50:27017/");
            var response = client.GetAsync(vin + "?format=json");
            response.Wait();
            var result = response.Result;
            if(result.IsSuccessStatusCode){
                var output = result.Content.ReadAsStringAsync();
                output.Wait();
                //var json_full = new JsonResult(output.Result);
                VinResult vr = JsonConvert.DeserializeObject<VinResult>(output.Result);
                List<int> values = new List<int>{26,28,29,31,38,39,75,136,5,14,49,23,33,61,37,15,41,2,59,72,134,127,128,9,11,12,13,21,71,125,139,146,176, 81, 87, 88, 102, 103, 104, 105, 191};
                var filtered = vr.Results.Where(x => values.Contains(x.VariableId));
                return Content(JsonConvert.SerializeObject(filtered), "application/json");
            }

        }
        return Content("{}", "application/json");
    }
}