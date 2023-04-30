using System.Security.Cryptography;
using System.Text;
public class Hasher
{

    public static string hash(string input)
    {
        StringBuilder sb = new StringBuilder();
        using (HashAlgorithm algorithm = SHA256.Create())
        {
            byte[] hashoutput = algorithm.ComputeHash(Encoding.UTF8.GetBytes(input));
            foreach (byte b in hashoutput)
            {
                sb.Append(b.ToString("X2"));
            }
        }
        return sb.ToString();
    }


    public static string getToken(){
        using(var crypto = new RNGCryptoServiceProvider()){
            byte[] bytes = new byte[32];
            crypto.GetBytes(bytes);
            return Convert.ToHexString(bytes);
        }
    }


}