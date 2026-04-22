import subprocess
import sys
import os

if len(sys.argv) < 3:
    print("Usage: python sync_vps.py <local_path> <remote_path>")
    sys.exit(1)

local_path = sys.argv[1]
remote_path = sys.argv[2]

with open(local_path, 'r', encoding='utf-8') as f:
    content = f.read()

remote_command = f"""cat > {remote_path} << "EOF"
{content}
EOF
"""

subprocess.run(['ssh', 'root@161.97.144.107', 'bash'], input=remote_command.encode('utf-8'))
print(f"Uploaded {local_path} to {remote_path}")
