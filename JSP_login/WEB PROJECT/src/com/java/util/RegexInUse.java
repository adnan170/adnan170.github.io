package com.java.util;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author adnan
 */
public class RegexInUse {
    
    private static Pattern UsernamePattern;
	private static Pattern PasswordPattern;
	private static Pattern EmailPattern;
    private static Matcher matcher;
    private static final String USERNAME_PATTERN = "^[0-9]{3,15}$";/*"^[a-z0-9_-]{3,15}$";*/
    /*  Username Regular Expression Pattern         ^[a-z0-9_-]{3,15}$
            ^                    # Start of the line
            [a-z0-9_-]           # Match characters and symbols in the list, a-z, 0-9, underscore, hyphen
            {3,15}               # Length at least 3 characters and maximum length of 15 
            $                    # End of the line
     */
    
    private static final String PASSWORD_PATTERN = "^[a-z]{3,15}$";/*"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})";*/
    /*  Password Regular Expression Pattern         ((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})
        (			#   Start of group
            (?=.*\d)		#   must contains one digit from 0-9
            (?=.*[a-z])		#   must contains one lowercase characters
            (?=.*[A-Z])		#   must contains one uppercase characters
            (?=.*[@#$%])	#   must contains one special symbols in the list "@#$%"
                .   		#   match anything with previous condition checking
            {6,20}          #   length at least 6 characters and maximum of 20	
        )					#   End of group
    */

    private static final String EMAIL_PATTERN = "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
    /*  Email Regular Expression Pattern    ^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@ [A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$
        ^                           #   start of the line
            [_A-Za-z0-9-]+          #   must start with string in the bracket [ ], must contains one or more (+)
            (                       #   start of group #1
            \\.[_A-Za-z0-9-]+       #   follow by a dot "." and string in the bracket [ ], must contains one or more (+)
            )*                      #   end of group #1, this group is optional (*)
            @			    		#   must contains a "@" symbol
            [A-Za-z0-9]+            #   follow by string in the bracket [ ], must contains one or more (+)
            (                       #	start of group #2 - first level TLD checking
            \\.[A-Za-z0-9]+         #	follow by a dot "." and string in the bracket [ ], must contains one or more (+)
            )*                      #	end of group #2, this group is optional (*)
            (                       #	start of group #3 - second level TLD checking
            \\.[A-Za-z]{2,}         #	follow by a dot "." and string in the bracket [ ], with minimum length of 2
            )                       #	end of group #3
        $                           #   end of the line
    */
    
    
    // Method to compile Patterns
	public static void PatternCompile() {
		UsernamePattern = Pattern.compile(USERNAME_PATTERN);
		PasswordPattern = Pattern.compile(PASSWORD_PATTERN);
		EmailPattern = Pattern.compile(EMAIL_PATTERN);
	}

	/**********************************************************
	 * Validate username with regular expression
	 * 
	 * @param username
	 *            username for validation
	 * @return true valid username, false invalid username
	 */
	public static boolean validateUserName(final String username) {
		PatternCompile();
		matcher = UsernamePattern.matcher(username);
		return matcher.matches();
	}

	/**********************************************************
	 * Validate password with regular expression
	 * 
	 * @param password
	 *            password for validation
	 * @return true valid password, false invalid password
	 */
	public static boolean validatePassword(final String password) {
		PatternCompile();
		matcher = PasswordPattern.matcher(password);
		return matcher.matches();
	}

	/**********************************************************
	 * Validate email with regular expression
	 * 
	 * @param email
	 *            email for validation
	 * @return true valid email, false invalid email
	 */
	public static boolean validateEmail(final String email) {
		PatternCompile();
		matcher = EmailPattern.matcher(email);
		return matcher.matches();
	}
        
 
}
