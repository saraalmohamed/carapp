using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using Newtonsoft.Json;
using MongoDB.Driver;
using MongoDB.Bson;


namespace MvcMovie.Controllers;

[Route("login")]
public class LoginController : Controller{
    public ContentResult Index(string username, string password){
        MongoClient dbClient = new MongoClient("mongodb://killbox:ParticularlyHappyIllustrations63%26Home@10.8.1.50:27017/");
        var dbList = dbClient.ListDatabases().ToList();

        var database = dbClient.GetDatabase("VehicleInfo");
        var collection = database.GetCollection<Account> ("accounts");

        Account account = collection.AsQueryable<Account>().Where(x => x.name == username && x.hash == Hasher.hash(password)).FirstOrDefault();

        if(account == null){
            return Content( "{\"token\": \""+ "0" + "\"}", "application/json");
        }
        else{
            return Content( "{\"token\": \""+ account.token + "\"}", "application/json");
        }
    }

}