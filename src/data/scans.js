export const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 12,
      high: 23,
      medium: 18,
      low: 4,
    },
    lastScan: "4d ago",
  },
  {
    id: 2,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: {
      critical: 2,
      high: 5,
      medium: 7,
      low: 1,
    },
    lastScan: "3d ago",
  },
  {
    id: 3,
    name: "Internal APIs",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
    lastScan: "Scheduled",
  },
]