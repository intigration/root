import { projects } from "./projects";

const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");
commands.set("touch", "Why would you touch anything?");
commands.set("rm", "Why would you remove anything?");
commands.set("show_automations", "Here' you go! 😊");
commands.set("about", aboutText());
commands.set("pwd", "/");
commands.set("date", new Date().toLocaleString());
commands.set("projects", projectsText());
commands.set("kali", kaliLogo());
commands.set("ls", projectsText());
commands.set("github", openLink("https://github.com/intigration"));
commands.set("linkedin", openLink("https://www.linkedin.com/in/engr-farhan"));
commands.set("repo", openLink("https://github.com/intigration/"));
commands.set("email", openLink("mailto:engr.farhan@icloud.com"));
commands.set(
  "codersrank",
  openLink("https://hub.docker.com/u/intigration/")
);
commands.set(
  "socials",
  "Usage: [command]<br><br>github, linkedin, email, docker"
);
commands.set("help", helpText());
commands.set("techstack", techStack());

export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  // commands that require redirecting
  switch (name) {
    case "github":
      window.open("https://github.com/intigration", "_blank");
      break;
    case "repo":
      window.open("https://github.com/initgration", "_blank");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/engr-farhan", "_blank");
      break;
    case "email":
      window.open("mailto:engr.farhan@icloud.com", "_blank");
      break;
    case "codersrank":
      window.open("https://hub.docker.com/u/intigration", "_blank");
      break;
    case "show_automations":
      window.open("https://qa-supervisor.vercel.app/automation", "_blank");
      break;
  }

  return commands.get(name) || `${name}: command not found`;
};

export const getCommandNames = (): string[] => {
  const commandNames: string[] = ["clear"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return commandNames.sort();
};

export function motdText(): string {
  return `
<dl>Welcome to the root!
  <dt><strong>I am Autonomous</strong><dd> Operates independently once configured</dd>
  
  <dt><strong>I am Reactive to</strong><dd>  Responds to changes in system state</dd>
  
  <dt><strong>I am Proactive</strong><dd>  Can predict and prevent issues</dd>
  
  <dt><strong>Collaborative</strong></dt>
  <dd>Communicates with other peers for coordinated actions</dd>
  
  <dt><strong>Resilient</strong></dt>
  <dd>Handles failures gracefully and recovers automatically</dd>
      <br>&nbsp;* Type 'help' to see the list of available commands.

</dl>
  `;
}

function helpText(): string {
  const commandNames: string[] = ["clear", "help"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return `
    Usage: [command] [options]
    <br>
    <br>

    ${commandNames.sort().join(", ")}
  `;
}

function aboutText(): string {
  return `
    Hello, root!
    <br><br>

<dl>
  <dt><strong>Industrial Automation Specialist</strong></dt>
  <dd>Expert in next-generation control systems and industrial IoT solutions</dd>
  
  <dt><strong>Data, Solution and Systems Architect</strong></dt>
  <dd>Specializes in memory-safe, high-performance concurrent systems engineering</dd>
  
  <dt><strong>Lock-Free Industrial Automation Expert</strong></dt>
  <dd>Designs real-time automation systems</dd>
  
  <dt><strong>Process, Quality and Performance Optimization</strong></dt>
  <dd>Achieves microsecond latencies and million+ signal throughput</dd>
  
  <dt><strong>Cloud-Native Automation</strong></dt>
  <dd>Pioneers modern distributed architectures for industrial applications</dd>
  
  <dt><strong>Open Source Advocate</strong></dt>
  <dd>Develops cutting-edge automation tools with permissive licensing</dd>
</dl>
  `;
}

function openLink(link: string): string {
  return `
    Redirecting to 
      <a class="terminal-link" href="${link}" target="_blank" rel="noreferrer">
        ${link}</a>...
    `;
}

function projectsText(): string {
  return `
    ${projects
      .map((project) => {
        return `
        <a 
          class="project-${project.category}"
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >${project.name}</a>`;
      })
      .join("&nbsp;&nbsp;&nbsp;")}
  `;
}

function kaliLogo() {
  return `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replaceAll(" ", "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replaceAll(" ", "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replaceAll(" ", "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replaceAll(" ", "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                     ;XO,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
    </span>
  `;
}

function techStack() {
  return `<a href="https://github.com/intigration" target="_blank"><img src="https://avatars.githubusercontent.com/u/25178774?v=4" /></a>`;
}
