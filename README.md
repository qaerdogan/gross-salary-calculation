# gross-salary-calculation

Calculation of gross salary from given net salary. NodeJS API , React Web App.

# The Goal

NodeJS API has built for receiving net salary request and make response calculated net salary. Web App built with reactJS for using salary calculation API which mentioned above. Webb App has one table to display releted data and two graph component for visualize some summarized results.

### Salary Calculation Method (From gross to net)

First of all calculation methods are country specific. I will make calculation according to Turkish tax system.

Generally calculation net salary from gross salary has specific formula which declared by goverment.

Note: Turkish Currency symbols is ₺ or TL

Salary formula:
Gross Salary = Net Salary + Social Sec. Fee + Unempl. Fee + Income Tax + Stamp Tax

Calculation Rates and Rules:

Social Security Fee : Gross Salary x 0.14
Unemployment Fee : Gross Salary x 0.01
Stamp Tax : Gross Salary x 0.00759019
Income Tax Base(ITB) = Gros Salary - Social Security Fee - Unempl. Fee
Cumulative Income Tax Base(CITB): Previous Month ITB + Current Month ITB ( This value reset every 1'st January. )

Income tax steps and rates:
level 1 => 0.0 to 22.000 15%
level 2 => 22.000 to 49.000 20%
level 3 => 49.000 to 180.000 %27
level 4 => 180.000 to above %35

Note: You should be carefully making calculation on tax steps. Sometimes (Previous Month ITB + Current Month ITB) can overlay of two level same time.

For Instance, Previous Month ITB = 17.834,42 , Current Month ITB = 6.052,71
When you add them value will be pass over the level 1 upper limit(22.000). Because of that you should make calculation until 22.000 of this amount from 15% and rest from 20%.

From net to gross
When it's comes to calculate gross salary from net salary there is no certain formula. You have to develop some algorithm to calculate for it. Actually we know this algorithm from somewhere. If you are MS Excell user may be you have a knowladge about Goal Seek formula. We will try to catch gross salary from predicted net salary by recursive function.

### Tech

NodeJS API and reactJS Web APP placed in a same repository.Web App palaced in a client directory of project root folder. Web App make request to API by proxy. Proxy eliminate CORS error. Both can be run same time.

API running on

```sh
localhost:5000/payroll/:netSalary
```

Web app running on

```sh
localhost:3000
```

NodeJS API using express.js library and routing logic.
reactJS Web App using some third party libraries such as bootstrap, react-table, react-chartjs-2 and axios.

### Running Project

- Running NodeJS API

```sh
$ cd <project-root-folder>
$ npm start
```

- Running reactJS Web App

```sh
$ cd <project-root-folder>/client
$ npm start
```

### Dockerize Project

- NodeJS API

```sh
docker build -t node-web-app .
docker run -p 49000:5000 -d node-web-app
```

- react.JS API
  !!! Docker file created but has no implementation. There is required development effort.

### Todos

- Production ready improvement ( Enviroment Variables etc..)
- Improve UI design
- Security Concerns development (Brut Force etc..)
- Logging
- Caching

## License

MIT
