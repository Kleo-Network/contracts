from boa.interop.Neo.Storage import GetContext, Get, Put, Delete
from boa.builtins import list

def main(operation, args):
    if operation == 'store_org_info':
        return store_org_info(args[0], args[1], args[2])
    elif operation == 'get_org_info':
        return get_org_info(args[0])
    elif operation == 'delete_org_info':
        return delete_org_info(args[0])
    return False

def store_org_info(name, email, user_ids):
    """
    Store organization info by name
    :param name: Name of the organization
    :param email: Email of the organization
    :param user_ids: List of user IDs associated with the organization
    :return: True if successful, False otherwise
    """
    if not name or not email or not user_ids:
        return False
    
    ctx = GetContext()
    
    # Serialize user_ids to a string for storage
    serialized_user_ids = ",".join([str(uid) for uid in user_ids])
    
    Put(ctx, name + "_email", email)
    Put(ctx, name + "_user_ids", serialized_user_ids)
    return True

def get_org_info(name):
    """
    Retrieve organization info by name
    :param name: Name of the organization
    :return: Dictionary with organization details
    """
    ctx = GetContext()
    
    email = Get(ctx, name + "_email")
    serialized_user_ids = Get(ctx, name + "_user_ids")
    user_ids = serialized_user_ids.split(",") if serialized_user_ids else []
    
    return {
        'name': name,
        'email': email,
        'user_ids': user_ids
    }

def delete_org_info(name):
    """
    Delete organization info by name
    :param name: Name of the organization
    :return: True if successful, False otherwise
    """
    ctx = GetContext()
    Delete(ctx, name + "_email")
    Delete(ctx, name + "_user_ids")
    return True
