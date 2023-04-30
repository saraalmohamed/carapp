using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using Newtonsoft.Json;
using MongoDB.Driver;
using MongoDB.Bson;


namespace MvcMovie.Controllers;

[Route("adddata")]
public class AddDataController : Controller{
    public ContentResult Index(string token, string vin){

        MongoClient dbClient = new MongoClient("mongodb://killbox:ParticularlyHappyIllustrations63%26Home@10.8.1.50:27017/");
        var database = dbClient.GetDatabase("VehicleInfo");
        var collection = database.GetCollection<Account> ("accounts");


        Account testDocument = collection.AsQueryable<Account>().Where(x => x.token == token).FirstOrDefault();

        if(testDocument == null){
          return Content( "{\"result\": \"account doesn't exists\"}", "application/json");
        }

        if(testDocument.vins == null){
            testDocument.vins = new List<string>();
        }

        testDocument.vins.Add(vin);

        collection.ReplaceOne(Builders<Account>.Filter.Eq("token", token), testDocument);

    
    return Content( "{\"result\": \"success\"}", "application/json");
         
    }

}