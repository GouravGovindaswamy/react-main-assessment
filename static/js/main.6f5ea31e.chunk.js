(this["webpackJsonpreact-main-assessment"]=this["webpackJsonpreact-main-assessment"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(0),n=a.n(s),r=a(19),o=a.n(r),c=(a(44),a(14)),l=a(6);a(32);var h=function(e){return Object(i.jsxs)("div",{style:{width:"500px",margin:"30px",marginLeft:"720px",marginTop:"200px"},children:[Object(i.jsx)("h3",{children:"Sign In"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Email address"}),Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter email",autoComplete:"new-emailid"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",autoComplete:"new-password"})]}),Object(i.jsx)("input",{className:"btn btn-primary btn-block",defaultValue:"login",onClick:function(){e.history.push("/dashboard")}}),Object(i.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(i.jsx)("span",{children:"password?"})]})]})]})},p=a(9),d=a(10),j=a(12),b=a(11),m=(a(45),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{margin:"30px",marginLeft:"50px",color:"brown",marginTop:"50px"},children:"Welcome to Unifly'98 "}),Object(i.jsx)("h4",{style:{margin:"30px",marginLeft:"80px",marginBottom:"50px"},children:"Book your flight tickets at the best price at your convenience"}),Object(i.jsx)("hr",{style:{borderWidth:"5px"}}),Object(i.jsx)(l.a,{to:"/login"})]})}}]),a}(n.a.Component)),u=a(56),x=a(58),O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)(u.a,{bg:"primary",variant:"dark",children:[Object(i.jsx)(u.a.Brand,{as:c.b,to:"/dashboard",children:"Unifly'98"}),Object(i.jsxs)(x.a,{className:"mr-auto",children:[Object(i.jsx)(x.a.Link,{as:c.b,to:"/dashboard/book",children:"Book a ticket"}),Object(i.jsx)(x.a.Link,{as:c.b,to:"/dashboard/viewTickets",children:"View your tickets"})]}),Object(i.jsx)(x.a,{children:Object(i.jsx)(x.a.Link,{href:"/login",children:"Logout"})})]}),Object(i.jsx)(l.a,{to:"/dashboard/book"})]})}}]),a}(n.a.Component),f=O=Object(l.f)(O),g=a(57),v=a(37),y=a(54),k=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(p.a)(this,a),(i=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value;"firstName"===t&&i.setState({firstName:a}),"lastName"===t&&i.setState({lastName:a}),"emailid"===t&&i.setState({emailid:a}),"phoneNumber"===t&&i.setState({phoneNumber:a}),"departure"===t&&i.setState({departure:a}),"arrival"===t&&i.setState({arrival:a}),"date"===t&&i.setState({date:a}),"airlines"===t&&i.setState({airlines:a}),"seat"===t&&i.setState({seat:a}),"age"===t&&i.setState({age:a})},i.passTicket=function(e){console.log(i.state),i.props.history.push({pathname:"/dashboard/validate",state:i.state})},i.state={firstName:"",lastName:"",emailid:"",phoneNumber:"",arrival:"",departure:"",date:"",airlines:"",seat:"",age:""},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{style:{marginTop:"50px"},children:[Object(i.jsx)("h2",{style:{color:"dodgerblue",fontStyle:"bold"},children:"Book a Ticket"}),Object(i.jsxs)(g.a,{style:{width:"700px",marginLeft:"600px",marginTop:"50px"},children:[Object(i.jsx)(g.a.Row,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:Object(i.jsx)(g.a.Label,{children:"Enter your Name  "})}),Object(i.jsxs)(g.a.Row,{children:[Object(i.jsx)(v.a,{children:Object(i.jsx)(g.a.Control,{placeholder:"First name",name:"firstName",onChange:this.handleChange})}),Object(i.jsx)(v.a,{children:Object(i.jsx)(g.a.Control,{placeholder:"Last name",name:"lastName",onChange:this.handleChange})})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Enter Email address"}),Object(i.jsx)(g.a.Control,{type:"email",placeholder:"Enter email",name:"emailid",onChange:this.handleChange})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Enter Phone Number "}),Object(i.jsx)(g.a.Control,{type:"number",placeholder:"Enter Phone Number with +91",name:"phoneNumber",onChange:this.handleChange})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Enter Age"}),Object(i.jsx)(g.a.Control,{type:"number",placeholder:"Enter Age",name:"age",onChange:this.handleChange})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Enter Departure Airport "}),Object(i.jsx)(g.a.Control,{type:"text",placeholder:"Enter Departure",name:"departure",onChange:this.handleChange})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Enter Arrival Airport "}),Object(i.jsx)(g.a.Control,{type:"text",placeholder:"Enter Arrival",name:"arrival",onChange:this.handleChange})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Select Journey Date "}),Object(i.jsx)(g.a.Control,{type:"date",name:"date",onChange:this.handleChange})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Select Airlines "}),Object(i.jsxs)(g.a.Control,{as:"select",name:"airlines",onChange:this.handleChange,children:[Object(i.jsx)("option",{defaultValue:"choose",children:"choose..."}),Object(i.jsx)("option",{value:"Air Vistara",children:"Air Vistara"}),Object(i.jsx)("option",{value:"Indigo",children:"Indigo"}),Object(i.jsx)("option",{value:"Air Asia",children:"Air Asia"}),Object(i.jsx)("option",{value:"Air India",children:"Air India"}),Object(i.jsx)("option",{value:"SpiceJet",children:"SpiceJet"})]})]}),Object(i.jsxs)(g.a.Row,{style:{marginTop:"40px",marginLeft:"2px"},children:[Object(i.jsx)(g.a.Label,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:"Select Seat Preferences "}),Object(i.jsxs)(g.a.Control,{as:"select",name:"seat",onChange:this.handleChange,children:[Object(i.jsx)("option",{defaultValue:"choose",children:"choose..."}),Object(i.jsx)("option",{value:"Aisle",children:"Aisle"}),Object(i.jsx)("option",{value:"Window",children:"Window"}),Object(i.jsx)("option",{value:"Front",children:"Front"}),Object(i.jsx)("option",{value:"Back",children:"Back"})]})]}),Object(i.jsx)(y.a,{style:{marginTop:"40px",marginLeft:"2px"},variant:"outline-primary",onClick:this.passTicket,children:"Check Availability"})]})]})}}]),a}(n.a.Component),N=k=Object(l.f)(k),w=a(55),C=[{Name:"Air Vistara",aisle:!0,window:!0,back:!0,front:!0,price:4e3,time:"5:40PM"},{Name:"Air Asia",aisle:!1,window:!0,back:!0,front:!0,price:6e3,time:"6:00PM"},{Name:"Indigo",aisle:!0,window:!1,back:!0,front:!0,price:8e3,time:"7:00PM"},{Name:"Air India",aisle:!1,window:!0,back:!0,front:!1,price:1e4,time:"8:00PM"},{Name:"SpiceJet",aisle:!0,window:!1,back:!1,front:!0,price:3e3,time:"2:30PM"}],L=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(p.a)(this,a),(i=t.call(this,e)).state={ticket:[]},i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.location.state);var e=this.props.location.state.firstName,t=this.props.location.state.lastName,i=this.props.location.state.emailid,s=this.props.location.state.phoneNumber,n=this.props.location.state.departure,r=this.props.location.state.arrival,o=this.props.location.state.date,c=this.props.location.state.airlines,l=this.props.location.state.seat,h={firstName:e,lastName:t,emailid:i,phoneNumber:s,departure:n,arrival:r,age:this.props.location.state.age,seat:l,date:o,time:this.props.location.state.time,airlines:c,Quantity:this.props.location.state.Quantity};a.ticket=this.state.ticket,a.ticket.push(h),console.log(a.ticket),this.setState({ticket:a.ticket})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(w.a,{striped:!0,bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"S.No"}),Object(i.jsx)("th",{children:"First Name"}),Object(i.jsx)("th",{children:"Last Name"}),Object(i.jsx)("th",{children:"Email ID"}),Object(i.jsx)("th",{children:"Phone Number"}),Object(i.jsx)("th",{children:"Departure Airport"}),Object(i.jsx)("th",{children:"Arrival Airport"}),Object(i.jsx)("th",{children:"Date of Journey"}),Object(i.jsx)("th",{children:"Time of Jouney"}),Object(i.jsx)("th",{children:"Seat Preference"}),Object(i.jsx)("th",{children:"Airlines"}),Object(i.jsx)("th",{children:"Quantity"})]})}),Object(i.jsx)("tbody",{children:this.state.ticket.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t+1}),Object(i.jsx)("td",{children:e.firstName}),Object(i.jsx)("td",{children:e.lastName}),Object(i.jsx)("td",{children:e.emailid}),Object(i.jsx)("td",{children:e.phoneNumber}),Object(i.jsx)("td",{children:e.departure}),Object(i.jsx)("td",{children:e.arrival}),Object(i.jsx)("td",{children:e.date}),Object(i.jsx)("td",{children:e.time}),Object(i.jsx)("td",{children:e.seat}),Object(i.jsx)("td",{children:e.airlines}),Object(i.jsx)("td",{children:e.Quantity})]},t)}))})]})})}}]),a}(n.a.Component);L.ticket=[];var S=L=Object(l.f)(L),T=a(38),A=a.n(T),E=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(p.a)(this,a),(i=t.call(this,e)).checkPrice=function(){var e,t=i.props.location.state.airlines;return C.forEach((function(a,i){a.Name===t&&(e=a.price)})),e},i.checkTime=function(){var e,t=i.props.location.state.airlines;return C.forEach((function(a,i){a.Name===t&&(e=a.time)})),e},i.handleChange=function(e){var t=e.target.name,a=e.target.value;"Quantity"===t&&i.setState({Quantity:a})},i.bookTicket=function(e){A.a.fire({title:"Success",text:"Your ticket is booked",icon:"success",confirmButtonText:"OK"});i.state.firstName,i.state.lastName,i.state.emailid,i.state.phoneNumber,i.state.departure,i.state.arrival,i.state.age,i.state.seat,i.state.date,i.state.time,i.state.airlines;i.props.history.push({pathname:"/dashboard/viewTickets",state:i.state})},i.state={firstName:"",lastName:"",emailid:"",phoneNumber:"",departure:"",arrival:"",date:"",airlines:"",seat:"",age:"",price:"",airlinesList:[],available:"",Quantity:"",time:""},i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.location.state);var e=this.checkPrice(),t=this.checkTime();console.log(e),this.setState({firstName:this.props.location.state.firstName,lastName:this.props.location.state.lastName,emailid:this.props.location.state.emailid,phoneNumber:this.props.location.state.phoneNumber,departure:this.props.location.state.departure,arrival:this.props.location.state.arrival,date:this.props.location.state.date,airlines:this.props.location.state.airlines,seat:this.props.location.state.seat,age:this.props.location.state.age,airlinesList:C,available:this.props.location.state.available,price:e,time:t})}},{key:"render",value:function(){return Object(i.jsxs)("div",{style:{marginTop:"50px"},children:[Object(i.jsxs)("h2",{style:{color:"dodgerblue"},children:["The price per ticket for ",this.state.seat," seat at ",this.state.airlines," is ",this.state.price]}),Object(i.jsxs)(g.a,{style:{width:"700px",marginLeft:"600px",marginTop:"50px"},children:[Object(i.jsxs)(g.a.Row,{style:{marginLeft:"5px",color:"brown",fontWeight:"bold",fontSize:"20px"},children:[Object(i.jsx)(g.a.Label,{children:"Enter Number of Tickets"}),Object(i.jsx)(g.a.Control,{type:"number",placeholder:"Enter Quantity",name:"Quantity",onChange:this.handleChange})]}),Object(i.jsx)(y.a,{style:{marginTop:"40px",marginLeft:"2px"},variant:"outline-success",onClick:this.bookTicket,children:"Pay"})]})]})}}]),a}(n.a.Component),P=E=Object(l.f)(E),W=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(p.a)(this,a),(i=t.call(this,e)).checkAvailability=function(){var e=i.state.seat,t=i.state.airlines,a=i.state.airlinesList,s=!1;console.log(t),"Aisle"===e?(console.log("aisle"),a.forEach((function(e,a){if(e.Name===t&&!0===e.aisle)return console.log("in aisle"),s=!0}))):"Window"===e?a.forEach((function(e,a){if(e.Name===t&&!0===e.window)return s=!0})):"Front"===e?a.forEach((function(e,a){if(e.Name===t&&!0===e.front)return s=!0})):"Back"===e&&a.forEach((function(e,a){if(e.Name===t&&!0===e.back)return s=!0})),console.log(s),i.setState({available:s})},i.bookAgain=function(e){i.props.history.push("/dashboard/book")},i.passTicket=function(e){i.props.history.push({pathname:"/dashboard/issueTickets",state:i.state})},i.state={firstName:"",lastName:"",emailid:"",phoneNumber:"",departure:"",arrival:"",date:"",airlines:"",seat:"",age:"",airlinesList:[],available:""},i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.location.state),this.setState({firstName:this.props.location.state.firstName,lastName:this.props.location.state.lastName,emailid:this.props.location.state.emailid,phoneNumber:this.props.location.state.phoneNumber,departure:this.props.location.state.departure,arrival:this.props.location.state.arrival,date:this.props.location.state.date,airlines:this.props.location.state.airlines,seat:this.props.location.state.seat,age:this.props.location.state.age,airlinesList:C,available:""})}},{key:"render",value:function(){var e="";return!0===this.state.available?e=Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{style:{color:"brown"},children:["Your ticket from ",this.state.departure," to ",this.state.arrival," is available on ",this.state.airlines," on ",this.state.date," as you requested"]}),Object(i.jsxs)("h2",{style:{color:"dodgerblue"},children:[" Your seat preference of ",this.state.seat," is also available"]}),Object(i.jsx)("h2",{style:{color:"dodgerblue"},children:" Confirm to book your tickets"}),Object(i.jsx)(y.a,{style:{marginTop:"40px",marginLeft:"2px"},variant:"outline-success",onClick:this.passTicket,children:"Confirm and Pay"})]}):!1===this.state.available&&(e=Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{style:{color:"brown"},children:["Your ticket from ",this.state.departure," to ",this.state.arrival," is available on ",this.state.airlines," on ",this.state.date," as you requested"]}),Object(i.jsxs)("h2",{style:{color:"red"},children:[" But we regret to inform you that your seat preference of ",this.state.seat," is not available."]}),Object(i.jsx)("h2",{style:{color:"dodgerblue"},children:"Please select other options "}),Object(i.jsx)(y.a,{style:{marginTop:"40px",marginLeft:"2px"},variant:"outline-danger",onClick:this.bookAgain,children:"Book Again"})]})),Object(i.jsxs)("div",{children:[Object(i.jsx)(y.a,{style:{marginTop:"40px",marginLeft:"2px",marginBottom:"20px"},variant:"outline-success",onClick:this.checkAvailability,children:"Check the Availability"}),e]})}}]),a}(n.a.Component),B=W=Object(l.f)(W);var R=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(c.a,{children:Object(i.jsxs)(l.b,{component:m,children:[Object(i.jsx)(l.b,{path:"/",component:m}),Object(i.jsx)(l.b,{path:"/login",component:h}),Object(i.jsxs)(l.b,{component:f,children:[Object(i.jsx)(l.b,{path:"/dashboard",component:f}),Object(i.jsx)(l.b,{path:"/dashboard/book",component:N}),Object(i.jsx)(l.b,{path:"/dashboard/viewTickets",component:S}),Object(i.jsx)(l.b,{path:"/dashboard/validate",component:B}),Object(i.jsx)(l.b,{path:"/dashboard/issueTickets",component:P})]})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),n(e),r(e)}))};o.a.render(Object(i.jsxs)(n.a.StrictMode,{children:[Object(i.jsx)(R,{}),","]}),document.getElementById("root")),z()}},[[52,1,2]]]);
//# sourceMappingURL=main.6f5ea31e.chunk.js.map