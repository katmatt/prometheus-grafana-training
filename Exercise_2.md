# Exercise 2: Querying prometheus

* Custom query language promQL for querying/aggregating metrics: https://prometheus.io/docs/prometheus/latest/querying/basics/
* prometheus has a simple built-in query/graph UI: http://localhost:9090/graph
* Execute your first promQL query:
  * Show the number of all http requests: sum without(job, instance)  (http_requests_total)
  * Generate some load with: ab -n 3000 http://localhost:4000/
