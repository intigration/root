interface Project {
  name: string;
  link: string;
  category: string;
  // category: "frontend" | "backend" | "fullstack" | "other";
}

export const projects: Project[] = [

  {
    "name": "Data Factory Connectors",
    "link": "https://learn.microsoft.com/en-us/fabric/data-factory/data-factory-overview",
    "category": "Data Sources & Acquisition"
  },
  {
    "name": "OneLake Unified Storage",
    "link": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-overview",
    "category": "Data Storage"
  },
  {
    "name": "Delta Lake Support",
    "link": "https://learn.microsoft.com/en-us/fabric/delta-lake/overview",
    "category": "Storage Architecture"
  },
  {
    "name": "Microsoft Purview Integration",
    "link": "https://learn.microsoft.com/en-us/fabric/security/governance",
    "category": "Security"
  },
  {
    "name": "Data Lineage & Governance",
    "link": "https://learn.microsoft.com/en-us/fabric/security/governance",
    "category": "Data Governance"
  },
  {
    "name": "On-premises Data Gateway",
    "link": "https://learn.microsoft.com/en-us/data-integration/gateway/",
    "category": "Deployment Options"
  },
  {
    "name": "Data Transformations",
    "link": "https://learn.microsoft.com/en-us/fabric/data-factory/transformations",
    "category": "Data Processing & Integration"
  },
  {
    "name": "Power BI Integration",
    "link": "https://learn.microsoft.com/en-us/fabric/business-intelligence/power-bi-overview",
    "category": "Analytics & Visualization"
  },
  {
    "name": "Fabric Data Science",
    "link": "https://learn.microsoft.com/en-us/fabric/data-science/overview",
    "category": "Advanced Analytics"
  },
  {
    "name": "Event Streams",
    "link": "https://learn.microsoft.com/en-us/fabric/real-time-analytics/event-streams-overview",
    "category": "Real-Time Analytics"
  },
  {
    "name": "Auto-scaling Compute",
    "link": "https://learn.microsoft.com/en-us/fabric/enterprise/compute",
    "category": "Performance & Scalability"
  },
  {
    "name": "Power Query Interface",
    "link": "https://learn.microsoft.com/en-us/power-query/",
    "category": "User Experience"
  },
  {
    "name": "REST APIs & SDKs",
    "link": "https://learn.microsoft.com/en-us/fabric/developer/",
    "category": "Integration & Extensibility"
  },
  {
    "name": "Real-time Dashboards",
    "link": "https://learn.microsoft.com/en-us/power-bi/connect-data/service-real-time-streaming",
    "category": "Dashboard & Reporting"
  },
  {
    "name": "Fabric Capacity Licensing",
    "link": "https://learn.microsoft.com/en-us/fabric/enterprise/licensing",
    "category": "Licensing"
  },
  {
    "name": "Microsoft Learn Training",
    "link": "https://learn.microsoft.com/en-us/training/fabric/",
    "category": "Training"
  }

];
