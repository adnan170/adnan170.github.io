<%@ page language="java" contentType="text/html; charset=US-ASCII"   pageEncoding="US-ASCII"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>List of Courses</title>
 		<style type="text/css">
			body{
				position: absolute;
			    width:80%;
			  	height:80%;
			  	top:5%;
			  	left:10%;
			    padding: 15px;
	    		border-radius: 5px;
			    border:1px solid grey;
			}
			table, td, th {    
			    border: 1px solid #ddd;
			    text-align: left;
			}
			
			table {
			    border-collapse: collapse;
			    width: 100%;
			}
			
			th, td {
			    padding: 15px;
			}
			
			tr:hover {background-color: #f5f5f5}
		</style>
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
		<div>
			<h1>List of Courses</h1>
			<table>
				<tr>
					<th>Course ID</th>
					<th>Course Name</th>
					<th>Link</th>
				</tr>
				<c:forEach items="${coursesList}" var="courses">
					<c:set var="link_prefix" value="view.jsp?course_name="/>
					<tr>
						<td><c:out value="${courses.key}" /></td>
						<td><c:out value="${courses.value}" /></td>
						<td> <a href="<c:out value="${link_prefix}${courses.key}" />">Click to View Course</a></td>
					</tr>
				</c:forEach>
			</table>	
		</div>	
	</body>
</html>