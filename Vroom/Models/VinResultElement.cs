using Newtonsoft.Json;

public class VinResultElement{
    [JsonProperty("Value")]
    public string? Value;
    [JsonProperty("ValueId")]
    public string? ValueId;
    [JsonProperty("Variable")]
    public string? Variable;
    [JsonProperty("VariableId")]
    public int VariableId;
}