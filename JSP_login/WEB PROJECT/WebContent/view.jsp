<%@ page language="java" contentType="text/html; charset=US-ASCII"   pageEncoding="US-ASCII"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Checkout Page</title>
 		<style>
			body{
				text-align: center;
			}
			.first-div {
			  width:60%;
			  height:75%;
			  float:left;
			  border: 1px solid grey
			}
			
			.second-div {
			  width:39%;
			  height:75%;
			  float:left;
			  border: 1px solid grey
			}
			.third-div {
			  width:100%;
			  height:100%;
			  float:left;
			  border-top: 1px solid grey
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
			    margin-top: -5%;
    			margin-right: -90%;
			}
			
			input[type="button"] {
				background-color: #4CAF50;
			    border: none;
			    color: white;
			    padding: 14px 20px;
			    text-align: center;
			    text-decoration: none;
			    display: inline-block;
			    font-size: 14px;
			    cursor: pointer;
			}
			
			input[type="text"]{
			    width: 65%;
				padding: 12px 20px;
				margin: 8px 0;
				box-sizing: border-box;
			}
		</style>
		<script src="JS/Comment.js"></script>
	</head>

	<body>
		<%
		  response.setHeader("Cache-Control","no-cache");
		  response.setHeader("Cache-Control","no-store");
		  response.setHeader("Pragma","no-cache");
		  response.setDateHeader ("Expires", 0);

		  if(request.getSession().getAttribute("user")==null)
		      response.sendRedirect("index.jsp");

		%>
			<h1>View Course  Details</h1>
			<form action="Logout" method="post">
				<input type="submit" value="Logout">
			</form>
			<br>
			
			
			<div class="first-div">
				<object data="PDF/${param.course_name}.pdf" type="application/pdf" width="100%" height="100%">
				</object>
			</div>
			
			<div class="second-div">
				<h3>Comments Section</h3>
				<div class="third-div">
					<form>
						<input type="button" id="clear_button" value="Clear">
						<label for="note_text"></label><input type="text" id="note_text" placeholder="Comment">
						<input type="button" id="add_button" value=Submit>
					</form>
					<ul id="commentList" style="list-style: none; text-align: justify;"></ul>
				</div>
			</div>
	</body>
</html>