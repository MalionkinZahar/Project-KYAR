<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/cityHistory">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <div class="history-content">
          <h1>История города</h1>
          <xsl:for-each select="period">
            <div class="period-section">
              <xsl:if test="@class='current-period'">
                <xsl:attribute name="class">period-section current-period</xsl:attribute>
              </xsl:if>
              <h2 class="period-title">❖ <xsl:value-of select="title"/></h2>
              <xsl:for-each select="text">
                <p class="period-text"><xsl:value-of select="."/></p>
              </xsl:for-each>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>