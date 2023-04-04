<%
	session.removeAttribute("userId");
	session.invalidate();
	response.sendRedirect("./");

%>