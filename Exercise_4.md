# Exercise 4: Use variables in grafana

* Define a custom, multi value variable service with values: example-hapi-server, example-hapi-server-1
* Define a row that repeats it’s content for the service variable
* Add a panel/graph that shows the total number of requests for the service
* Generate some load on one of the monitored hapi servers:
  * ab -n 3000 http://localhost:4000/
  * ab -n 3000 http://localhost:4001/

