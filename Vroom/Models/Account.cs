using MongoDB.Bson;

public class Account{
    public ObjectId _id;

    public string name = null!;
    public string hash = null!;

    public string token = null!;

    public List<string> vins;

}