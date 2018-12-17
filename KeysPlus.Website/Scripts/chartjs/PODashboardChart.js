// Use this for the property owner dashboard javascript
function RentalViewModel(data) {
    var self = this;
    self.PropertyId = ko.observable(data.PropertyId);
    self.Address = ko.observable(data.Address);
    self.Landlordname = ko.observable(data.Landlordname);
    self.RentalPaymentType = ko.observable(data.RentalPaymentType);
    self.TargetRent = ko.observable(data.PaymentAmount);
    self.PaymentDueDate = ko.observable(data.PaymentDueDate);
    self.PaymentStartDate = ko.observable(data.PaymentStartDate);
    self.NextPaymenDate = ko.observable(data.NextPaymenDate);
    self.CalendarMonthYear = ko.computed(function () {
        return moment(self.NextPaymenDate()).format('MMM') + ' ' + moment(self.NextPaymenDate()).format('YYYY');
    });
}

var Rentals = function (data) {
    var self = this;
    self.TenantRentals = ko.observableArray();
    data.TenantRentalDashboardData.forEach(function (item) {
        self.TenantRentals.push(new RentalViewModel(item));
    });
}

function PODashBoard(data) {
    console.log("POData", data.PropDashboardData);

    // Property Display
    var propData = chartData.makeData(data.PropDashboardData);
    var propOptions = chartOptions.makeOptions(data.PropDashboardData);
    var propChart = KeysChart.drawDoughnut('prop-chart', propData, propOptions);
    document.getElementById('prop-chart-legend').innerHTML = propChart.generateLegend();

    // Rental Application Display
    var rentAppData = chartData.makeData(data.RentAppsDashboardData);
    var rentAppOptions = chartOptions.makeOptions(data.RentAppsDashboardData);
    var rentAppChart = KeysChart.drawDoughnut('rentApp-chart', rentAppData, rentAppOptions);
    document.getElementById('rentApp-chart-legend').innerHTML = rentAppChart.generateLegend();

    // Maintainance Jobs Display
    var jobsData = chartData.makeData(data.JobsDashboardData);
    var jobsOptions = chartOptions.makeOptions(data.JobsDashboardData);
    var jobsChart = KeysChart.drawDoughnut('jobs-chart', jobsData, jobsOptions);
    document.getElementById('jobs-chart-legend').innerHTML = jobsChart.generateLegend();

    // Tenant Requests Display
    var tenantRequestData = chartData.makeData(data.RequestDashboardData);
    var tenantRequestOptions = chartOptions.makeOptions(data.RequestDashboardData);
    var requestChart = KeysChart.drawDoughnut('tenant-request-chart', tenantRequestData, tenantRequestOptions);
    document.getElementById('tenant-request-chart-legend').innerHTML = requestChart.generateLegend();

    // Job Quotes Display
    var quotesData = chartData.makeData(data.JobQuotesDashboardData);
    var quotesOptions = chartOptions.makeOptions(data.JobQuotesDashboardData);
    var quotesChart = KeysChart.drawDoughnut('quotes-chart', quotesData, quotesOptions);
    document.getElementById('quotes-chart-legend').innerHTML = quotesChart.generateLegend();
}