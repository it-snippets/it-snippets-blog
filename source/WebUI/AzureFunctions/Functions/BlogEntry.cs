using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AzureFunctions
{
    public static class BlogEntry
    {
        // TODO: use async Task<IActionResult> Run
        [FunctionName("BlogEntry")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "BlogEntry/{id}")] HttpRequest req, Guid id, ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            dynamic response = new { id = id, content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor ligula eu porttitor tincidunt. Phasellus commodo nunc augue. Mauris vel nisi nibh. Vivamus vehicula justo quis urna fringilla scelerisque. Curabitur aliquam scelerisque mauris, vitae fringilla leo ultricies ut. Vivamus at feugiat quam. Sed elementum dui in lacus iaculis luctus. Quisque hendrerit sed orci at dictum. Suspendisse nunc massa, iaculis a posuere eu, finibus ut nibh. Maecenas imperdiet nulla nisl, non tincidunt sapien egestas quis. Phasellus faucibus sem vitae elit porta vehicula at non dui." };

            return new OkObjectResult(response);
        }
    }
}

