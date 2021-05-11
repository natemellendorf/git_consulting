## Tunnel through AWS SSM Tunnels 

### TL;DR

```bash
## Setup a connection to your instance from your local via SSM tunneling

aws ssm start-session \
--target your-instance-id \
--document-name AWS-StartPortForwardingSession \
--parameters '{"portNumber":["22"],"localPortNumber":["9999"]}'

## Setup a new connection to anything in your AWS VPC with a second tunnel:

ssh ec2-user@127.0.0.1 -p 9999 \
-CNL localhost:55432:10.0.0.6:55432
```

### Overview

If you've worked with SSM in the past, you've likely leveraged SSM Session Manager to connect to your instances. It's an extremely convent, elegant, and secure solution for remotely accessing instances and their local services.

[Review SSM Port Forwarding](https://aws.amazon.com/blogs/aws/new-port-forwarding-using-aws-system-manager-sessions-manager/)

However, what if you want to access other services that do not integrate with SSM? If they're not running an SSM agent, then they're not going to show up in your Session Manager as a target.

### Tunnel through a dedicated SSM instance

To work around this, you can leverage the built in features of SSH to accommodate connecting to remote services via SSH forward proxy. To demonstrate, I'll leverage SSM to establish a tunnel to an instance that's running an SSM agent. Then, we'll use SSH to tunnel through that connection to access an Aurora Postgres DB.

## Instructions

### Attach an instance to SSM

- Create a new IAM Role with the following policy attached:
  - arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore
- Attach this IAM policy to your AWS Instance
  - In testing, an AMZ Linux 2 instance was used

### Install SSM plugin locally

```bash
curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac/sessionmanager-bundle.zip" \
-o "sessionmanager-bundle.zip" \
&& unzip sessionmanager-bundle.zip \
&& sudo ./sessionmanager-bundle/install \
-i /usr/local/sessionmanagerplugin \
-b /usr/local/bin/session-manager-plugin
```

### Establish your SSM Tunnel

```bash
aws ssm start-session --target <Your-Instance-ID> \
--document-name AWS-StartPortForwardingSession \
--parameters '{"portNumber":["22"],"localPortNumber":["9999"]}'
```

### Tunnel through your existing tunnel

Now, let's use SSH to connect through our SSM tunnel to connect to our Postgres database. 

```bash
ssh ec2-user@127.0.0.1 -p 9999 \
-CNL localhost:55432:<IP-or-FQDN-of-Postgres>:55432
```

### Finally, Connect to the DB

```bash
psql -h localhost -p 55432 -d <>db-name -U <username> -W
```

And you're set.  
Happy tunneling! 🚇


***[Nate Mellendorf](mailto:nate.mellendorf@gmail.com)***

[//]: # (Banner:aws-ssm-tunnel.jpg)
