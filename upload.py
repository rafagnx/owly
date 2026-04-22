import subprocess
import os

source_file = r'z:\AGENTS\OPENCLAU\new clau\owly\src\app\api\auth\route.ts'
with open(source_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Using double quotes for the EOF delimiter prevents variable expansion in bash
remote_command = f"""cat > /root/owly/src/app/api/auth/route.ts << "EOF"
{content}
EOF
"""

# Save this to a temp file
with open('temp_cmd.sh', 'w', encoding='utf-8') as f:
    f.write(remote_command)

# Execute via SSH piping the file content
subprocess.run(['ssh', 'root@161.97.144.107', 'bash'], input=remote_command.encode('utf-8'))
