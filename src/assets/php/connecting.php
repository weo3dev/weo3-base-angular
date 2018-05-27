<?php

$errors = '';
 
if(empty($errors)) {

    $postdata = json_decode(trim(file_get_contents("php://input")), true);

    $client_name = $postdata['fullname'];
    $client_email = filter_var($postdata['email'], FILTER_SANITIZE_EMAIL);

	$client_site = filter_var($postdata['website'], FILTER_SANITIZE_URL);

	$project_category = strip_tags($postdata['pcategory']);
	$project_status = strip_tags($postdata['pstatus']);

	$project_startdate = strip_tags($postdata['startdate']);
	$project_timeframe = strip_tags($postdata['timeframe']);
	$project_budget = strip_tags($postdata['budgetrange']);

	$project_purpose = strip_tags($postdata['purpose']);
	$project_goal = strip_tags($postdata['goal']);
	$project_notes = strip_tags($postdata['notes']);

	$content = "<ul style='list-style-type:none;margin-left:0;padding-left:0;'>";
	$content .= "<li><strong>Category:</strong> $project_category</li>";
	$content .= "<li><strong>Status:</strong> $project_status</li>";
	$content .= "<li><strong>Start Date:</strong> $project_startdate</li>";
	$content .= "<li><strong>Timeframe:</strong> $project_timeframe</li>";
	$content .= "<li><strong>Budget:</strong> $project_budget</li>";
	$content .= "</ul>";

	$content .= "<p><strong>Purpose - </strong><br/>$project_purpose</p>";
	$content .= "<p><strong>Primary Goal - </strong><br/>$project_goal</p>";
	$content .= "<p><strong>Additional Notes - </strong><br/>$project_notes</p>";
 
	$to_email = 'dev@weo3.com';
 
	$contact = "<p><strong>Name:</strong> $client_name<br/><strong>Email:</strong> $client_email</p>";

	$email_subject = "Connection Request";
 
	$email_body = '<html><body>';
	$email_body .= "<p>$contact</p><p>$content</p>";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: WEO3 Connect\n";
	$headers .= "Reply-To: $client_email\n";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	echo json_encode($response_array);

} else {

	$response_array['status'] = 'error';
	echo json_encode($response_array);

}



?>
