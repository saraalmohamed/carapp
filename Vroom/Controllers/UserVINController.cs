using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using Newtonsoft.Json;
using MongoDB.Driver;
using MongoDB.Bson;


namespace MvcMovie.Controllers;

[Route("uservin")]
public class UserVINController : Controller{
    public ContentResult Index(string token){
        MongoClient dbClient = new MongoClient("mongodb://killbox:ParticularlyHappyIllustrations63%26Home@10.8.1.50:27017/");
        var database = dbClient.GetDatabase("VehicleInfo");
        var collection = database.GetCollection<BsonDocument> ("accounts");
         BsonDocument document = collection.AsQueryable().Where(x => x.GetValue("token") == token).FirstOrDefault();
       
    return Content( "{\"result\": \"success\"}", "application/json");
         
    }

}