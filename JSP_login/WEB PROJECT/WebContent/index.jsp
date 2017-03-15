<%-- 
    Document   : login
     Author    : Adnan Rahman
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
 	    <style>
		    form{
			    position: absolute;
			    top: 40%;
			    left: 40%;
			    margin-top: -50px;
			    margin-left: -50px;
			    padding: 15px;
	    		border-radius: 5px;
			    border:1px solid grey;
			}
			input[type="text"],input[type="password"]{
			    width: 70%;
				padding: 12px 20px;
				margin: 8px 0;
				box-sizing: border-box;
			}
			
			input[type="submit"] {
				background-color: #4CAF50;
			    border: none;
			    color: white;
			    padding: 15px 32px;
			    text-align: center;
			    text-decoration: none;
			    display: inline-block;
			    font-size: 14px;
			    cursor: pointer;
			    margin-left: 25%;
			    width: 70%;
			}

	    </style>
	</head>

	<body>
	      <h1> Adnan Rahman </h1>
	      <h2>CSI518 Lab 1</h2>
		    Date: 9-20-2016
		<%
		  response.setHeader("Cache-Control","no-cache");
		  response.setHeader("Cache-Control","no-store");
		  response.setHeader("Pragma","no-cache");
		  response.setDateHeader ("Expires", 0);
		%>
        <form action="Login" method="POST">
            Username:<input type="text" name="username" value="" placeholder="Username"/><br>
            Password: <input type="password" name="pswd" value="" placeholder="Password"/><br>
            <input type="submit" value="Login" name="Login" />
        </form> 
    </body>
</html>
