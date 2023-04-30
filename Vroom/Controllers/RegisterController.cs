using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json.Linq;
using System.Linq;
using Newtonsoft.Json;
using MongoDB.Driver;
using MongoDB.Bson;


namespace MvcMovie.Controllers;

[Route("register")]
public class RegisterController : Controller{
    public ContentResult Index(string username, string password){
        if(username == null){
          return Content( "{\"result\": \"no username given\"}", "application/json");
        }
        if(password == null){
          return Content( "{\"result\": \"no password given\"}", "application/json");
        }
        MongoClient dbClient = new MongoClient("mongodb://killbox:ParticularlyHappyIllustrations63%26Home@10.8.1.50:27017/");
        var database = dbClient.GetDatabase("VehicleInfo");
        var collection = database.GetCollection<Account> ("accounts");


        Account testDocument = collection.AsQueryable<Account>().Where(x => x.name == username).FirstOrDefault();

        if(testDocument != null){
          return Content( "{\"result\": \"account already exists\"}", "application/json");
        }

        Account account = new Account();
        account.name = username;
        account.hash = Hasher.hash(password);
        account.token = Hasher.getToken();
        collection.InsertOne(account);
       
    return Content( "{\"result\": \"success\"}", "application/json");
         
    }

}