package com.java.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.TreeMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.java.util.RegexInUse;

/**
 * Servlet implementation class Login
 */

public class Login extends HttpServlet {
	private static final long serialVersionUID = -3978553585332895559L;
	Map<String, String> course = new TreeMap<String, String>();
	public static List<String> session_id_list = new ArrayList<String>();

	/**
	 * The init method is called only when the servlet is first loaded, before
	 * the first request is processed.
	 */
	public void init(ServletConfig config) throws ServletException {
		// Always call super.init
		super.init(config);

		ServletContext ctx = getServletConfig().getServletContext();
		Properties properties = new Properties();
		String fileName = getServletConfig().getInitParameter("configFile");

		try {
			properties.load(getServletContext().getResourceAsStream(fileName));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Enumeration<?> propKeys = properties.keys();

		while (propKeys.hasMoreElements()) {
			String key = (String) propKeys.nextElement();
			System.out.println(key + " = " + properties.getProperty(key));
			course.put(key, properties.getProperty(key));
		}
		// Finally store in servlet context
		ctx.setAttribute("coursesList", course);
		System.out.println(ctx.getAttribute("coursesList"));

	}

	/**
	 * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
	 * methods.
	 *
	 * @param request
	 *            servlet request
	 * @param response
	 *            servlet response
	 * @throws ServletException
	 *             if a servlet-specific error occurs
	 * @throws IOException
	 *             if an I/O error occurs
	 */
	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// To return content in text/html format
		response.setContentType("text/html;charset=UTF-8");
		
		// Get username and password from request
		String req_username = request.getParameter("username");
		String req_password = request.getParameter("pswd");

		// Get username and password from context
		String username = request.getServletContext().getInitParameter("username");
		String password = request.getServletContext().getInitParameter("password");

		boolean result = false;
				if (RegexInUse.validateUserName(req_username) && RegexInUse.validatePassword(req_password) && username.equals(req_username) && password.equals(req_password)) {
			result = true;
		}
		if (result) {
			// Retrieve the current session, create one if not exists
			HttpSession session = request.getSession(true);

			synchronized (session) { // synchronized to prevent concurrent updates
				// Populate the user info
				session.setAttribute("user", username);
				// setting session to expiry in 30 mins
				session.setMaxInactiveInterval(30 * 60);
				Cookie userName = new Cookie("user", username);
				userName.setMaxAge(30 * 60);
				response.addCookie(userName);
				session_id_list.add(session.getId());
			}
			response.sendRedirect("home.jsp");

		}else{
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/index.jsp");
			PrintWriter out= response.getWriter();
			out.println("<font color=red>Either user name or password is wrong.</font>");
			rd.include(request, response);
		}

	}

	/**
	 * Handles the HTTP <code>GET</code> method.
	 * 
	 * @param request
	 *            servlet request
	 * @param response
	 *            servlet response
	 * @throws ServletException
	 *             if a servlet-specific error occurs
	 * @throws IOException
	 *             if an I/O error occurs
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.sendRedirect("index.jsp");
	}

	/**
	 * Handles the HTTP <code>POST</code> method.
	 * 
	 * @param request
	 *            servlet request
	 * @param response
	 *            servlet response
	 * @throws ServletException
	 *             if a servlet-specific error occurs
	 * @throws IOException
	 *             if an I/O error occurs
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	/**
	 * Returns a short description of the servlet.
	 *
	 * @return a String containing servlet description
	 */
	@Override
	public String getServletInfo() {
		return "Short description";
	}// </editor-fold>

}
