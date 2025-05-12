export default defineNuxtPlugin(() => {
    // Ensure this runs only in the browser
    if (process.client) {
        // Initialize Zoho SalesIQ object
        window.$zoho = window.$zoho || {};
        window.$zoho.salesiq = window.$zoho.salesiq || {
            mode: "async",
            widgetcode: "0812d8cda4ce1bd823a0fe22948c4a8683d5aca809431633ca24bdec1390c481",
            values: {},
            ready: function () {
                // Optional: Add custom ready callbacks here
                console.log("Zoho SalesIQ widget loaded");
            },
        };

        // Create and append the script element
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "zsiqscript";
        script.defer = true;
        script.src = "https://salesiq.zoho.com/widget";

        // Insert the script before the first script tag
        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        // Create the widget container div
        const widgetDiv = document.createElement("div");
        widgetDiv.id = "zsiqwidget";
        document.body.appendChild(widgetDiv);
    }
});