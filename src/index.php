<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" >

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Application</title>

    <!--  CSS INCLUDES - START -->

    <link rel="stylesheet" type="text/css" href="ext-js/resources/css/ext-all.css">

    <!--  CSS INCLUDES - END -->

    <!--  PHP INCLUDES - START -->

    <?php
    include('util/JavaScriptIncluder.php');
    ?>

    <!--  PHP INCLUDES - END -->

    <!--  JAVASCRIPT INCLUDES - START -->

    <script type="text/javascript" src="ext-js/ext-all-debug.js"></script>

    <?php
        JavaScriptIncluder::includeAll('core');
        JavaScriptIncluder::includeAll('ux');
        JavaScriptIncluder::includeAll('util');
    ?>

    <script type="text/javascript" src="application/app.js"></script>

    <!--  JAVASCRIPT INCLUDES - END -->

</head>

<body>
</body>

</html>