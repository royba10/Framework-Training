<?php

class JavaScriptIncluder {

    /**
     * Extracts the extension of the file passed as parameter
     */
    private static function ext($argFilename) {
        return pathinfo($argFilename, PATHINFO_EXTENSION);
    }

    /**
     * Extracts the extension of the file passed as parameter
     */
    public static function includeAll($argDir){
        if (($tmpOpenedDir = opendir($argDir))) {
            while ($tmpFile = readdir($tmpOpenedDir)) {
                if (is_file($argDir . '/' . $tmpFile) && JavaScriptIncluder::ext($tmpFile) == 'js' ) {
                    echo '<script type="text/javascript" src="' .  $argDir . '/' . $tmpFile . '" ></script>' . PHP_EOL;
                }
            }
        }
        closedir($tmpOpenedDir);
    }
}

?>