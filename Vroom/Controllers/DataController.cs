using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using Newtonsoft.Json;
using MongoDB.Driver;
using MongoDB.Bson;



namespace MvcMovie.Controllers;

[Route("data")]
public class DataController : Controller{
    public ContentResult Index(string token){
        MongoClient dbClient = new MongoClient("mongodb://killbox:ParticularlyHappyIllustrations63%26Home@10.8.1.50:27017/");
        var dbList = dbClient.ListDatabases().ToList();

        var database = dbClient.GetDatabase("VehicleInfo");
        var collection = database.GetCollection<Account> ("accounts");

        Account document = collection.AsQueryable<Account>().Where(x => x.token == token).FirstOrDefault();

       if(document == null){
            return Content( "[]", "application/json");
       }else{
            if(document.vins != null){
                return Content( JsonConvert.SerializeObject(document.vins), "application/json");
            }else{
                  return Content( "[]", "application/json");
            }    
       }
    }

}