<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<?php
			$zwsid = "X1-ZWz19zkmws96h7_7rj5m";
			$prefixurl = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=";
			$addr = urlencode("879 W 23rd street");
			$cit = urlencode("Los Angeles");
			$stat = urlencode("CA");
			$csz = $cit."%2C+".$stat;
			$query = $prefixurl.$zwsid."&address=".$addr."&citystatezip=".$csz."&rentzestimate=true";
			$s = simplexml_load_file(trim($query));
			echo json_encode($s);
			if($s)
				echo "Success" else echo "Failure"
		?>
	</body>
</html>
